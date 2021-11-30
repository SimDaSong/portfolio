import React from "react";
import Image from "next/image";
import SubTitle from "@/components/SubTitle";
import globalClasses from "@/styles/global-classes";
import { projects } from "./data";
import Title from "@/components/Title";
import Tag from "@/components/Tag";
import Link from "@/components/Link";

const classes = {
  projectContentWrap: "grid grid-cols-1 gap-y-6 mt-5",
  image:
    "w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-60 lg:aspect-none",
  cardContentWrap: "mt-4",
};

const Project = () => {
  return (
    <div>
      <Title>🛠 PROJECT</Title>
      <div className={classes.projectContentWrap}>
        {projects.map((project, idx) => (
          <div key={idx}>
            <SubTitle>{project.title}</SubTitle>

            <div className={`mt-6 ${globalClasses.cardGroupWrap}`}>
              {project.items.map(
                (
                  project,
                  idx // @todo: project 네이밍 더 좋은 방법 없는지 생각해보기
                ) => (
                  <div key={idx} className={globalClasses.cardWrap}>
                    <Image
                      src={project.imageSrc}
                      alt={project.name}
                      className={classes.image}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                    />
                    <div className={classes.cardContentWrap}>
                      <p className={globalClasses.subText}>{project.date}</p>
                      <p className={globalClasses.text}>
                        {project.name}
                        <Link href={project.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                        </Link>
                      </p>
                      <div>
                        {project.tags.map((tag, idx) => (
                          <Tag key={idx}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
