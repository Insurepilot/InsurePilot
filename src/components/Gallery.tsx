import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('insurepilot_gallery');
      if (raw) setImages(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('insurepilot_gallery', JSON.stringify(images));
    } catch (e) {
      // ignore
    }
  }, [images]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const readers: Promise<string>[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      readers.push(
        new Promise((res, rej) => {
          const fr = new FileReader();
          fr.onload = () => res(String(fr.result));
          fr.onerror = () => rej();
          fr.readAsDataURL(file);
        })
      );
    }

    Promise.all(readers).then((dataUrls) => {
      setImages((s) => [...dataUrls, ...s]);
    });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    if (inputRef.current) inputRef.current.value = '';
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (idx: number) => {
    setImages((s) => s.filter((_, i) => i !== idx));
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-sbi-dark">Gallery</h3>
          <div className="text-sm text-gray-500">Upload photos to preview on the homepage</div>
        </div>

        <div
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center bg-slate-50"
        >
          <p className="text-sm text-gray-600 mb-4">Drag & drop images here, or</p>
          <div className="flex items-center justify-center gap-3">
            <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-sbi-amber text-white rounded-md shadow">
              Choose files
              <input ref={inputRef} onChange={onInputChange} type="file" accept="image/*" multiple className="hidden" />
            </label>
            <button
              type="button"
              onClick={() => setImages([])}
              className="px-3 py-2 text-sm border rounded bg-white"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.length === 0 && (
            <div className="col-span-full text-center text-gray-400 py-12">No images uploaded yet.</div>
          )}
          {images.map((src, idx) => (
            <div key={idx} className="relative rounded overflow-hidden bg-slate-100">
              <img src={src} alt={`upload-${idx}`} className="w-full h-40 object-cover" />
              <button
                onClick={() => removeImage(idx)}
                className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow"
                aria-label="Remove"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
