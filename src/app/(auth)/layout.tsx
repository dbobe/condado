import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/img/cw-logo-red.png"
              alt="Condado Window logo"
              width={48}
              height={48}
              className="object-contain dark:hidden"
            />
            <Image
              src="/img/cw-logo.png"
              alt="Condado Window logo"
              width={48}
              height={48}
              className="object-contain hidden dark:block"
            />
            <h1 className="text-2xl font-semibold dark:text-white text-primary">
              Condado Window
            </h1>
          </div>

          <div>{children}</div>
        </div>
      </section>
      <section className="auth-image relative">
        <Image
          src="/img/Banner-bg.png"
          alt="Condado Window banner"
          width={1440}
          height={400}
          className="size-full object-cover"
        />
        <div className="absolute z-10 bottom-24 left-4 text-white font-bebas-neue-pro">
          <h5 className="text-4xl font-medium uppercase">Welcome to</h5>
          <h1 className="text-6xl font-extrabold uppercase tracking-tight">
            Condado Window
          </h1>
          <div className="flex justify-end overflow-hidden w-[360px] h-[14px] absolute -left-4">
            <Image
              src="/img/linea-roja.png"
              alt="Red Line"
              width={772}
              height={14}
              className="object-cover object-right"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
