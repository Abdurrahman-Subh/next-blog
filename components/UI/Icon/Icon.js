import cn from "@/utils/cn";
const Icon = ({ icon, className, children, ...props }) => {
  return (
    <span className={cn(icon, className)} {...props}>
      {children}
    </span>
  );
};

export default Icon;
