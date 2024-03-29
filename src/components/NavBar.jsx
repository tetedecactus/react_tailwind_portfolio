import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import images from "../module/Images";
import style from "../style/Navbar.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

const navigation = [
  { name: "About", href: "#about", current: true },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className="min-h-full relative">
        <Disclosure as="nav" className={`${style.nav} ${style[theme]}`}>
          {({ open }) => {
            return (
              <>
                <div className="nav mx-auto max-w-8xl relative">
                  <div className="nav-container flex h-20 px-4  items-center justify-between">
                    <div className="w-full flex items-center  text-center sm:flex-row  sm:justify-between py-4 px-6  sm:items-center w-full">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <img
                          className="h-18 w-20"
                          src={
                            theme === "light"
                              ? images.logo_l
                              : theme === "dark"
                              ? images.logo_d
                              : images.logo_csm
                          }
                          alt="olablac logo"
                        />
                      </div>
                      <div className="hidden justify-end md:block">
                        <div className="mx-auto flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                "nav-link rounded-md font-bold",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden relative">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="nav-mobile-button relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none ">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
                <Disclosure.Panel className="md:hidden">
                  <div className=" space-y-1 relative px-2 pt-2 pb-3 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={
                          "nav-mobile-link relative block px-3 py-2 rounded-md text-base font-medium"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            );
          }}
        </Disclosure>
      </section>
    </>
  );
}

export default NavBar;

//ajouter logo de hover et scale on hover
//mettre items menu block
