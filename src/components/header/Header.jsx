import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LOGO from "../../assets/logojuraganikan.png";
import PROFIL from "../../assets/profil.webp";
import Notification from "./Notification";
import { useLocation } from "react-router-dom";

const navigation = [
  { name: "Pencatatan", href: "/Pencatatan" },
  { name: "Statistik", href: "/statistik" },
  { name: "Panduan", href: "/panduan" },
  { name: "Artikel", href: "/halartikel" },
  { name: "Forum", href: "/forum" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ noBackground }) {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk mengontrol visibilitas menu mobile
  const location = useLocation();

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
                    {/* Memperbaiki logika untuk mengontrol visibilitas menu mobile */}
                    <Disclosure.Button
                      className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {isMobileMenuOpen ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <img className="h-8 w-auto" src={LOGO} alt="LOGO" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a key={item.name} href={item.href} className={classNames(location.pathname === item.href ? "text-[#F6841F]" : "text-gray-300 hover:text-[#f6631f]", "rounded-md px-3 py-2 text-sm font-bold")}>
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
                  </div>
                </div>
              </div>

              {/* Menambahkan opsi menu mobile */}
              <Disclosure.Panel as="nav" className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className={classNames(location.pathname === item.href ? "text-[#F6841F]" : "text-gray-300 hover:text-[#f6631f]", "block px-3 py-2 rounded-md text-base font-bold")}>
                      {item.name}
                    </a>
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
