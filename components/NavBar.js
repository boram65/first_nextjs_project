import Link from "next/link";
import { useRouter } from "next/router";
import { cls, add } from "../libs/utils";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <nav>
        <ul className="flex justify-around bg-green-400 py-5 ">
          <li>
            <Link href="/">
              <a
                className={cls(
                  router.pathname === "/"
                    ? "text-4xl text-white"
                    : "text-4xl text-yellow-200"
                )}
              >
                홈
              </a>
            </Link>
          </li>
          <li>
            <Link href="/counter">
              <a
                className={cls(
                  router.pathname === "/counter"
                    ? "text-4xl text-white"
                    : "text-4xl text-yellow-200"
                )}
              >
                카운터
              </a>
            </Link>
          </li>
          <li>
            <Link href="/todo">
              <a
                className={cls(
                  router.pathname === "/todo"
                    ? "text-4xl text-white"
                    : "text-4xl text-yellow-200"
                )}
              >
                todoList
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a
                className={cls(
                  router.pathname === "/users"
                    ? "text-4xl text-white"
                    : "text-4xl text-yellow-200"
                )}
              >
                사용자 목록
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users/ssr">
              <a
                className={cls(
                  router.pathname === "/users/ssr"
                    ? "text-4xl text-white"
                    : "text-4xl text-yellow-200"
                )}
              >
                (SSR)사용자 목록
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={cls(
                  router.pathname === "/about"
                    ? "text-4xl text-white"
                    : "text-4xl text-yellow-200"
                )}
              >
                개발자 소개
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
