import Loader from "@/components/common/Loader";

export default function Loading() {
  // You might want to make it full screen for page transitions
  return (
    <div className="h-screen flex items-center justify-center">
      <Loader />
    </div>
  );
}