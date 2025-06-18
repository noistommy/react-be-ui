interface SlotProps {
  name: string;
  children: React.ReactNode;
}

const Slot = ({children}: SlotProps) => {
  return <>{children}</>
}

export default Slot