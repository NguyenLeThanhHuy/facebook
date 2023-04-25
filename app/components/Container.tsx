'use client';

interface ContainerProps {
   children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
   return (
      <div className="lg:w-[980px] mx-auto p-4 lg:p-0 overflow-x-auto">
         {children}
      </div>
   );
};

export default Container;
