import { Upload } from "lucide-react";

function FileUploadCard({ label }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
      <p className="mb-2 text-sm font-semibold text-slate-700">{label}</p>
      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-600 hover:bg-slate-100">
        <Upload size={16} />
        Upload File (UI Only)
        <input type="file" className="hidden" />
      </label>
      <p className="mt-2 text-xs text-slate-500">
        Accepted: .pdf, .jpg, .png (15 KB - 256 KB)
      </p>
    </div>
  );
}

export default FileUploadCard;
