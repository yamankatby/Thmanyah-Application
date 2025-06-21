import Button from "./button";
import Dropdown from "./dropdown";
import Chevron from "./icons/chevron";
import Logo from "./logo";
import Search from "./search";

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
      <div className="flex items-center gap-1">
        <div className="hidden items-center gap-1 md:flex">
          <Button>Log in</Button>
          <Button>Sign up</Button>
        </div>
        <Dropdown>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>About</Dropdown.Item>
          <Dropdown.Item>What's new</Dropdown.Item>
          <Dropdown.Item>Podcaster FAQ</Dropdown.Item>
          <Dropdown.Item>Privacy</Dropdown.Item>
          <Dropdown.Item>Terms</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>Contact & Feedback</Dropdown.Item>
          <Dropdown.Item>Clear Data...</Dropdown.Item>
        </Dropdown>
      </div>
    </nav>
  );
}
