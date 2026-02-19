import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Project } from "@/types/global";

export default function ProjectsSection({
  projects = [],
}: {
  projects?: Project[];
}) {
  return (
    <section className="w-full bg-[#F3F3F3] py-[160px] px-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-[54px] text-center text-[64px] font-black text-[#191918]">
          НАШИ ПРОЕКТЫ
        </h2>

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 ">
          {(projects ?? []).map((project) => (
            <div
              key={project.title}
              className="relative overflow-hidden rounded-[32px] bg-black text-white min-h-[430px]"
            >
              {project.type === "video" ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={project.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              )}

              <Link href={project.href} className="block">
                <div className="bg-[#19191833]/20 backdrop-blur-[10px] absolute inset-x-0 bottom-0 flex flex-col gap-1 px-6 py-4 border-t border-t-[#F3F3F3]">
                  <p className="text-[36px] font-black text-[#F3F3F3] mb-2">
                    {project.title}
                  </p>
                  <p className="text-[16px] text-[#F3F3F3]">
                    {project.category}
                  </p>
                </div>
              </Link>
            </div>
          ))}
          <div className="flex items-end justify-center">
            <Button
              variant="outline"
              size="full"
              className="flex w-full items-center justify-between h-[80px] px-8 text-[36px] hover:bg-[#3A4731]/5 hover:text-[#3A4731]"
            >
              Оставить заявку
              <Image
                src="/icons/arrow-down.svg"
                alt="Arrow right"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
