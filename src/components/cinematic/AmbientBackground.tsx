export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10rem] left-[-10rem] w-[35rem] h-[35rem] rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />

      <div className="absolute bottom-[-12rem] right-[-12rem] w-[40rem] h-[40rem] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

      <div className="absolute top-[40%] left-[50%] w-[20rem] h-[20rem] rounded-full bg-cyan-300/5 blur-3xl" />
    </div>
  );
}