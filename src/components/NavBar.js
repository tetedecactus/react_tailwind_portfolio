import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/img/logo.svg'

const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-black">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-8xl px-4">
                <div className="flex h-20 items-center justify-between">
                  <div className="w-full flex items-center text-center sm:flex-row  sm:justify-between py-4 px-6 shadow sm:items-center w-full">
					{/* Logo */}
                    <div className="flex-shrink-0">
                      <img
                        className="h-16 w-18"
                        src={logo}
                        alt="olablac logo"
                      />
                    </div>
                    <div className="hidden justify-end  md:block">
                      <div className="mx-auto  flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames('text-[#FFFBDC] hover:bg-[#FFFBDC] hover:text-[#101010]',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-[#101010] p-2 text-[#FFFBDC] hover:bg-[#FFFBDC] hover:text-[#101010] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#101010]">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-[#101010] text-[#FFFBDC]' : 'text-[#FFFBDC] hover:bg-[#FFFBDC] hover:text-[#101010]',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}

export default NavBar;
