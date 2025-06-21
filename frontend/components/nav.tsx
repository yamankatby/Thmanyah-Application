import Button from "./button";
import Logo from "./logo";
import Search from "./search";

const Chevron = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      stroke="none"
      d="M217.9 256 345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"
    />
  </svg>
);

const More = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    className="jsx-8dd1f9521a2787d1 jsx-1598947942"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" stroke="none" d="M0 0h24v24H0z" />
    <path
      stroke="none"
      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    />
  </svg>
);

const IconButton = ({ children }: { children: React.ReactNode }) => (
  <button className="cursor-pointer px-[5px] text-[#8A8B94] hover:text-white">
    {children}
  </button>
);

export default function Nav() {
  return (
    <nav className="nav sticky inset-x-0 top-0 z-50 flex items-center gap-2.5 bg-[#161727fa] p-2.5 backdrop-blur-[5px]">
      <span className="md:hidden">
        <Logo size="sm" />
      </span>
      <div className="flex items-center">
        <IconButton>
          <Chevron className="size-[22px]" />
        </IconButton>
        <IconButton>
          <Chevron className="size-[22px] rotate-180" />
        </IconButton>
      </div>
      <Search />
      <div className="hidden items-center gap-1 md:flex">
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </div>
      <More className="w-[22px] text-white" />
    </nav>
  );
}
