import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LOGO from "../../assets/logojuraganikan.png";
import PROFIL from "../../assets/profil.webp";
import Notification from "./Notification";

const navigation = [
  { name: "Pencatatan", href: "/Pencatatan", current: false },
  { name: "Statistik", href: "/statistik", current: false },
  { name: "Panduan", href: "/panduan", current: false },
  { name: "Artikel", href: "/halartikel", current: false },
  { name: "Forum", href: "/forum", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ noBackground }) {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleShowNotification = (message) => {
    setShowNotification(true);
    setNotificationMessage(message);
    setNotificationCount(notificationCount + 1);
    setTimeout(() => {
      setShowNotification(false);
    }, 1000000);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      <header className={`header ${noBackground ? "no-background" : ""}`}>
        <Notification message={notificationMessage} count={notificationCount} show={showNotification} onClose={handleCloseNotification} />
        <Disclosure as="nav" className="bg-tealCustom text-white p-4 z-50 fixed w-full">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-10 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <img className="h-8 w-auto" src={LOGO} alt="LOGO" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300  hover:text-[#F6841F] ", "rounded-md px-3 py-2 text-sm font-bold")}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex gap-2 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      className="relative rounded-full p-1 text-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => handleShowNotification("Notifikasi baru")}
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6 fill-[#ffbf00]" aria-hidden="true" />
                      {notificationCount > 0 && <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white rounded-full text-xs px-1">{notificationCount}</span>}
                    </button>

                    <a href="/akun">
                      <button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user</span>
                        <img className="h-8 w-8 rounded-full" src={PROFIL} alt="Profile" />
                      </button>
                    </a>
                    {/* Profile dropdown */}
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>
    </>
  );
}
