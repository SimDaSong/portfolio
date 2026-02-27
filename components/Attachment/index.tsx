import { PaperClipIcon } from "@heroicons/react/24/solid";

type File = {
  name: string;
  path: string;
};

type Props = {
  files: File[];
};

const classes = {
  attachmentWrap: "max-w-screen-sm text-sm",
  list: "border rounded-md divide-y [border-color:var(--border-divider)] [--tw-divide-opacity:1] divide-[var(--border-divider)]",
  listItem: "pl-3 pr-4 py-3 flex items-center justify-between text-sm",
  icon: "flex-shrink-0 h-5 w-5 [color:var(--text-muted)]",
  fileNameWrap: "w-0 flex-1 flex items-center",
  fileName: "ml-2 flex-1 w-0 truncate",
  downloadWrap: "ml-4 flex-shrink-0",
  download: "font-medium text-default",
};

const Attachment = ({ files }: Props) => {
  return (
    <div className={classes.attachmentWrap}>
      <ul className={classes.list}>
        {files.map((file, idx) => (
          <li key={idx} className={classes.listItem}>
            <div className={classes.fileNameWrap}>
              <PaperClipIcon className={classes.icon} aria-hidden="true" />
              <span className={classes.fileName}>{file.name}</span>
            </div>
            <div className={classes.downloadWrap}>
              <a
                href={file.path}
                download={file.name}
                className={classes.download}
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attachment;
