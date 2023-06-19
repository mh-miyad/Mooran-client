import { Accordion } from "flowbite-react";
import React from "react";
import icon from "../../../assets/icons/qestion.png";

const FAQSec = () => {
  return (
    <div>
      <div className='text-xl text-center mb-10 md:text-3xl lg:text-5xl font-bold  text-indigo-700 uppercase'>
        <span>Frequently asked question</span>
      </div>
      <div className='flex items-center flex-col md:flex-row gap-10'>
        <div>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>
                How can i become a vendor on the app?
              </Accordion.Title>
              <Accordion.Content>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  <p>
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  <p>Check out this guide to learn how to</p>
                  <a
                    className='text-cyan-600 hover:underline dark:text-cyan-500'
                    href='https://flowbite.com/docs/getting-started/introduction/'>
                    <p>get started</p>
                  </a>
                  <p>
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Is there a way i can reach out to the seller directly?
              </Accordion.Title>
              <Accordion.Content>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  <p>
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  <p>Check out the</p>
                  <a
                    className='text-cyan-600 hover:underline dark:text-cyan-500'
                    href='https://flowbite.com/figma/'>
                    <p>Figma design system</p>
                  </a>
                  <p>
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>What if i want a refund?</Accordion.Title>
              <Accordion.Content>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  <p>
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                </p>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  <p>
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                </p>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  Learn more about these technologies:
                </p>
                <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
                  <li>
                    <a
                      className='text-cyan-600 hover:underline dark:text-cyan-500'
                      href='https://flowbite.com/pro/'>
                      <p>Flowbite Pro</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-cyan-600 hover:underline dark:text-cyan-500'
                      href='https://tailwindui.com/'
                      rel='nofollow'>
                      <p>Tailwind UI</p>
                    </a>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Can i request for a particular material?
              </Accordion.Title>
              <Accordion.Content>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  <p>
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                </p>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  <p>
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                </p>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  Learn more about these technologies:
                </p>
                <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
                  <li>
                    <a
                      className='text-cyan-600 hover:underline dark:text-cyan-500'
                      href='https://flowbite.com/pro/'>
                      <p>Flowbite Pro</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-cyan-600 hover:underline dark:text-cyan-500'
                      href='https://tailwindui.com/'
                      rel='nofollow'>
                      <p>Tailwind UI</p>
                    </a>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className='md:w-1/3 text-center '>
          <div class='p-4 space-y-3 border-2 border-blue-700 dark:border-blue-300 rounded-xl'>
            <span class=' mx-auto  text-blue-500 dark:text-blue-400'>
              <img src={icon} alt='' className='mx-auto' />
            </span>

            <h1 class='text-xl font-semibold text-gray-700 capitalize dark:text-white'>
              Do you have more questions?
            </h1>

            <p class='text-gray-500 dark:text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            </p>
            <button className='bg-blue-700 text-white py-2 px-3 rounded-lg font-bold '>
              Shoot a direct mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSec;
