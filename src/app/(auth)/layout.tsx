import PrivacyContainer from "@/components/ui/PrivacyContainer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center relative">
      <div className="absolute top-0 md:top-20 w-full md:w-[500px] px-4 h-full">
        {children}
        <div className="w-[95%] p-3 md:px-0 md:w-[465px] absolute bottom-1">
          <PrivacyContainer />
        </div>
      </div>
    </div>
  );
}
