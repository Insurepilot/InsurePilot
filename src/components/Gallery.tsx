import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [cloudName, setCloudName] = useState<string>('');
  const [uploadPreset, setUploadPreset] = useState<string>('');
  const [useCloudinary, setUseCloudinary] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('insurepilot_gallery');
      if (raw) setImages(JSON.parse(raw));
    } catch (e) {
      // ignore
    }

    try {
      const cloudRaw = localStorage.getItem('insurepilot_cloud');
      if (cloudRaw) {
        const obj = JSON.parse(cloudRaw);
        setCloudName(obj.cloudName || '');
        setUploadPreset(obj.uploadPreset || '');
        setUseCloudinary(!!(obj.cloudName && obj.uploadPreset));
      }
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

  useEffect(() => {
    try {
      localStorage.setItem('insurepilot_cloud', JSON.stringify({ cloudName, uploadPreset }));
    } catch (e) {
      // ignore
    }
  }, [cloudName, uploadPreset]);

  const uploadToCloudinary = async (file: File) => {
    if (!cloudName || !uploadPreset) throw new Error('Missing Cloudinary config');
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', uploadPreset);
    const res = await fetch(url, { method: 'POST', body: fd });
    if (!res.ok) throw new Error('Upload failed');
    const json = await res.json();
    return json.secure_url || json.url;
  };

  const handleFiles = async (files: FileList | null) => {
    if (!files) return;
    setUploading(true);
    const results: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        if (useCloudinary && cloudName && uploadPreset) {
          const cloudUrl = await uploadToCloudinary(file);
          results.push(cloudUrl);
        } else {
          const dataUrl = await new Promise<string>((res, rej) => {
            const fr = new FileReader();
            fr.onload = () => res(String(fr.result));
            fr.onerror = () => rej();
            fr.readAsDataURL(file);
          });
          results.push(dataUrl);
        }
      } catch (e) {
        // fallback to dataURL
        try {
          const dataUrl = await new Promise<string>((res, rej) => {
            const fr = new FileReader();
            fr.onload = () => res(String(fr.result));
            fr.onerror = () => rej();
            fr.readAsDataURL(file);
          });
          results.push(dataUrl);
        } catch (e) {
          // skip
        }
      }
    }

    setImages((s) => [...results, ...s]);
    setUploading(false);
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

        <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          <div className="col-span-1">
            <label className="block text-sm text-gray-600">Cloudinary Cloud Name</label>
            <input value={cloudName} onChange={(e) => setCloudName(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" placeholder="your-cloud-name" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm text-gray-600">Upload Preset</label>
            <input value={uploadPreset} onChange={(e) => setUploadPreset(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" placeholder="unsigned_preset" />
          </div>
          <div className="col-span-1 flex items-center gap-3">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={useCloudinary} onChange={(e) => setUseCloudinary(e.target.checked)} />
              <span className="text-sm">Upload to Cloudinary</span>
            </label>
            <div className="text-xs text-gray-400">(Stores config in your browser)</div>
          </div>
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
            {uploading && <div className="ml-3 text-sm text-gray-500">Uploading...</div>}
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
