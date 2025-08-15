import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';



// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "",
    link: [""],
  },
  {
    id: 2,
    section: "",
    link: [""],
  },
  {
    id: 3,
    section: "",
    link: [""],
  },
  {
    id: 4,
    section: "",
    link: [""],
  },
];

const footer = () => {
  const path = usePathname();
  const isHome = path === '/';

  return (
    <div className={`bg-black ${isHome ? '-mt-40 pt-48' : ''}`} id="first-section">
      <div className="bg-black" id="first-section">
      <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 content-between">
        <div className="mt-24 gap-y-10 gap-x-16">
          {/* COLUMN-1 */}

          <div className="flex sm:flex-row flex-col gap-6 justify-between items-center">
            <h3 className="text-white sm:text-4xl text-3xl font-semibold leading-9">
              {" "}
              Dr. Anurag Mishra{" "}
            </h3>
            <div className="flex gap-4">
              <div className="footer-icons">
                <Link
                  href="https://api.whatsapp.com/send?phone=919219307327"
                  target="_blank"
                >
                  <Image
                    src={"/images/footer/whatsapp.svg"}
                    alt="whatsapp"
                    width={18}
                    height={23}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link
                  href="https://www.facebook.com/anurag.mishra.589"
                  target="_blank"
                >
                  <Image
                    src={"/images/footer/vec.svg"}
                    alt="facebook"
                    width={15}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://twitter.com">
                  <Image
                    src={"/images/footer/twitter.svg"}
                    alt="twitter"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link
                  href="https://www.instagram.com/dr.anurag_mishra/"
                  target="_blank"
                >
                  <Image
                    src={"/images/footer/instagram.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {/* {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-white text-lg font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg">
                @{new Date().getFullYear()} - All Rights Reserved by{" "}
                <Link href="/"> Dr. Anurag Mishra</Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default footer;
