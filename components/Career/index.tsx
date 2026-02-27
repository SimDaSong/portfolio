import Title from "@/components/Title";
import { careers } from "@/data/careers";

const classes = {
  tableRow: "py-5 border-b md:grid md:grid-cols-5 md:gap-6 [border-color:var(--border-divider)]",
  text: "break-words font-bold sm:mt-0",
  subText: "text-sm font-large [color:var(--text-muted)]",
};

export default function Career() {
  return (
    <div>
      <Title>💻 CAREER</Title>
      <div>
        {careers.map((career, idx) => (
          <div key={idx} className={classes.tableRow}>
            <div>
              <p className={classes.subText}>{career.date}</p>
              <p className={classes.text}>{career.name}</p>
              <p className={classes.subText}>{career.role}</p>
            </div>
            <div className="sm:col-span-4 mt-4 md:mt-0 [color:var(--text-secondary)]">{career.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
