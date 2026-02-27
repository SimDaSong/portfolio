"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import Tag from "@/components/Tag";
import Link from "@/components/Link";
import { projects } from "@/data/projects";

const classes = {
  projectContentWrap: "grid grid-cols-1 gap-y-6 mt-5",
  imageWrap: "overflow-hidden rounded-md",
  image: "w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105",
  cardGroupWrap: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-5",
  cardWrap: "group relative flex flex-col rounded-lg p-4 transition-shadow duration-300 hover:shadow-md stagger-item",
  cardContentWrap: "mt-3 flex flex-col flex-1",
  subText: "text-sm [color:var(--text-muted)]",
  text: "break-words font-bold sm:mt-0",
  tags: "mt-auto pt-2",
};

const Project = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".stagger-item");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            const delay = card.dataset.index ? Number(card.dataset.index) * 100 : 0;
            setTimeout(() => card.classList.add("visible"), delay);
            observer.unobserve(card);
          }
        }
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <Title>PROJECT</Title>
      <div className={classes.projectContentWrap}>
        {projects.map((project, idx) => (
          <div key={idx}>
            <SubTitle>{project.title}</SubTitle>

            <div className={`mt-6 ${classes.cardGroupWrap}`}>
              {project.items.map((item, itemIdx) => (
                  <div key={itemIdx} className={classes.cardWrap} data-index={itemIdx}>
                    <div className={classes.imageWrap}>
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        className={classes.image}
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className={classes.cardContentWrap}>
                      <p className={classes.subText}>{item.date}</p>
                      <p className={classes.text}>
                        {item.name}
                        <Link href={item.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                        </Link>
                      </p>
                      <div className={classes.tags}>
                        {item.tags.map((tag, tagIdx) => (
                          <Tag key={tagIdx}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
