import Title from "@/components/Title";
import { awards } from "@/data/awards";

const classes = {
  tableRow: "py-5 border-b md:grid md:grid-cols-5 md:gap-6 [border-color:var(--border-divider)]",
  text: "break-words font-bold sm:mt-0",
  subText: "text-sm font-large [color:var(--text-muted)]",
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
            <div className="sm:col-span-4 mt-4 md:mt-0 [color:var(--text-secondary)]">{award.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Award;
