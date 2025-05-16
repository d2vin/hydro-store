import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Menu, X} from 'lucide-react';

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    {name: 'SHOP', path: '#collections'},
    {name: 'LOOKBOOK', path: '#lookbook'},
    {name: 'ATELIER', path: '#atelier'},
    {name: 'ARCHIVE', path: '#archive'},
    {name: 'CONTACT', path: '#contact'},
  ];

  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Replaced purple-500/20 with #D63C33/20 */}
        <div
          className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full blur-3xl"
          style={{backgroundColor: 'rgba(214, 60, 51, 0.2)'}}
        />
        {/* Replaced pink-500/20 with #DF843C/20 */}
        <div
          className="absolute bottom-[30%] right-[10%] w-80 h-80 rounded-full blur-3xl"
          style={{backgroundColor: 'rgba(223, 132, 60, 0.2)'}}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-widest">BEDLAM</h1>
          <button
            onClick={toggleMenu}
            className="z-50 relative"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{opacity: 0, rotate: -90}}
                  animate={{opacity: 1, rotate: 0}}
                  exit={{opacity: 0, rotate: 90}}
                  transition={{duration: 0.3}}
                >
                  <X className="w-8 h-8" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{opacity: 0, rotate: 90}}
                  animate={{opacity: 1, rotate: 0}}
                  exit={{opacity: 0, rotate: -90}}
                  transition={{duration: 0.3}}
                >
                  <Menu className="w-8 h-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </header>

        <div className="mt-20 max-w-2xl">
          <h2 className="text-6xl font-extralight leading-tight">
            AVANT-GARDE
            <br />
            <span className="font-medium">FASHION</span>
            <br />
            COLLECTION
          </h2>
          <p className="mt-6 text-gray-400 max-w-md">
            Explore our latest collection that pushes the boundaries of
            conventional design, embracing asymmetry and deconstruction.
          </p>
        </div>

        {/* Absolutely positioned menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.5}}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                {/* Circular menu items */}
                <nav className="absolute top-1/2 left-[42%] md:left-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-500">
                  <ul className="relative">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{
                          opacity: 0,
                          x: 100 * Math.cos(index * (Math.PI / 2.5)),
                          y: 100 * Math.sin(index * (Math.PI / 2.5)),
                        }}
                        animate={{
                          opacity: 1,
                          x:
                            150 *
                            Math.cos(
                              index * ((2 * Math.PI) / menuItems.length),
                            ),
                          y:
                            150 *
                            Math.sin(
                              index * ((2 * Math.PI) / menuItems.length),
                            ),
                        }}
                        exit={{
                          opacity: 0,
                          x: 0,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                        }}
                        className="absolute"
                      >
                        <a
                          href={item.path}
                          className="group relative flex items-center justify-center"
                        >
                          <motion.div
                            className="absolute w-16 h-16 rounded-full -z-10"
                            style={{backgroundColor: 'rgba(61, 126, 70, 0.05)'}}
                            whileHover={{
                              scale: 1.5,
                              backgroundColor: 'rgba(61, 126, 70, 0.15)',
                            }}
                            transition={{duration: 0.3}}
                          />
                          <motion.span
                            className="text-xl font-light tracking-widest text-white"
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.2}}
                          >
                            {item.name}
                          </motion.span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border rounded-full"
                  style={{borderColor: 'rgba(43, 44, 111, 0.1)'}}
                  initial={{scale: 0, rotate: 0}}
                  animate={{scale: 1, rotate: 180}}
                  exit={{scale: 0, rotate: 0}}
                  transition={{duration: 0.8}}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border rounded-full"
                  style={{borderColor: 'rgba(223, 132, 60, 0.05)'}}
                  initial={{scale: 0, rotate: 0}}
                  animate={{scale: 1, rotate: -180}}
                  exit={{scale: 0, rotate: 0}}
                  transition={{duration: 1}}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
