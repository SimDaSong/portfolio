import Image from "next/image";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import Tag from "@/components/Tag";
import Link from "@/components/Link";
import { projects } from "@/data/projects";

const classes = {
  projectContentWrap: "grid grid-cols-1 gap-y-6 mt-5",
  image:
    "w-full aspect-square rounded-md overflow-hidden group-hover:opacity-75 h-60 lg:aspect-auto",
  cardContentWrap: "mt-4",
  cardGroupWrap: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
  cardWrap: "group relative",
  subText: "text-sm font-large text-gray-500",
  text: "break-words font-bold sm:mt-0",
};

const Project = () => {
  return (
    <div>
      <Title>🛠 PROJECT</Title>
      <div className={classes.projectContentWrap}>
        {projects.map((project, idx) => (
          <div key={idx}>
            <SubTitle>{project.title}</SubTitle>

            <div className={`mt-6 ${classes.cardGroupWrap}`}>
              {project.items.map((item, idx) => (
                  <div key={idx} className={classes.cardWrap}>
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      className={`${classes.image} object-cover`}
                      width={600}
                      height={600}
                      style={{ width: "100%", height: "auto" }}
                    />
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
                      <div>
                        {item.tags.map((tag, idx) => (
                          <Tag key={idx}>{tag}</Tag>
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
