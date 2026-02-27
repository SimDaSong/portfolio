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
  cardGroupWrap: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
  cardWrap: "group relative flex flex-col rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md",
  cardContentWrap: "mt-4 flex flex-col flex-1",
  subText: "text-sm [color:var(--text-muted)]",
  text: "break-words font-bold sm:mt-0",
  tags: "mt-auto pt-2",
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
