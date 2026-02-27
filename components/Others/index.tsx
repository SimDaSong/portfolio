import Title from "@/components/Title";
import { others } from "./data";

const classes = {
  othersContentWrap: "grid grid-cols-1 gap-y-8 mt-5",
  otherContentWrap: "sm:col-span-4 mt-4 md:mt-0",
  title: "text-lg font-bold text-default",
  tableRow: "py-5 border-b border-gray-200 md:grid md:grid-cols-5 md:gap-6",
  subText: "text-sm font-large text-gray-500",
};

const Others = () => {
  return (
    <div>
      <Title>👀 OTHERS</Title>
      <div className={classes.othersContentWrap}>
        {others.map((other, idx) => (
          <div key={idx}>
            <p className={classes.title}>{other.title}</p>
            <div>
              {other.items.map(
                (
                  other, // @todo: 네이밍 더 좋은 방법 없는지 생각해보기
                  idx
                ) => (
                  <div key={idx} className={classes.tableRow}>
                    <div>
                      <p className={classes.subText}>{other.date}</p>
                      <p className="font-bold">{other.title}</p>
                      <p className={classes.subText}>{other.role}</p>
                    </div>
                    <div className={classes.otherContentWrap}>
                      {other.content}
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

export default Others;
