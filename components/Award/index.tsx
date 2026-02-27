import Title from "@/components/Title";
import { awards } from "./data";

const classes = {
  tableRow: "py-5 border-b border-gray-200 md:grid md:grid-cols-5 md:gap-6",
  text: "break-words font-bold sm:mt-0",
  subText: "text-sm font-large text-gray-500",
};

const Award = () => {
  return (
    <div>
      <Title>🏆 AWARDS</Title>
      <div>
        {awards.map((award, idx) => (
          <div key={idx} className={classes.tableRow}>
            <div>
              <p className={classes.subText}>{award.date}</p>
              <p className={classes.text}>{award.title}</p>
              <p className={classes.subText}>{award.department}</p>
            </div>
            <div className="sm:col-span-4 mt-4 md:mt-0">{award.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Award;
