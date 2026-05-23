import {
  X,
} from "lucide-react";

const FooterBar = () => {
  return (
    <footer className="relative z-10 bg-black/90 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-sm text-gray-400">
          <p>MediaPedia©2026</p>
          <p>
            Developed By :{" "}
            <span className="text-orange-500">N.Harshavardan</span>
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
          <p className="text-sm mb-2">Follow Me</p>
          <div className="flex space-x-4 text-xl">
            <X className="hover:text-orange-500 cursor-pointer" />
            <X className="hover:text-orange-500 cursor-pointer" />
            <X className="hover:text-orange-500 cursor-pointer" />
            <X className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;