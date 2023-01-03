import { CodeBracketIcon } from "@heroicons/react/20/solid";

const Controls = () => {
  return (
    <div className="absolute bottom-0 right-0 p-4 flex gap-2 text-white z-10">
      <a
        href="https://github.com/Kimbo0o/drei"
        target="_blank"
        className="rounded-full p-2 bg-white/20 hover:bg-white/50"
      >
        <CodeBracketIcon className="w-6 h-6" />
      </a>
      <a
        href="https://kimdanielkoch.de"
        target="_blank"
        className="rounded-full p-2 bg-white/20 hover:bg-white/50"
      >
        <span>Made by&nbsp;</span>
        <span className="underline">Kim Daniel Koch</span>
      </a>
    </div>
  );
};

export default Controls;
