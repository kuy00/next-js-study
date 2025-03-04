export default function UserLayout({
  children,
  modal,
  slot,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  slot: React.ReactNode;
}) {
  return (
    <div>
      {slot}
      {children}
      {modal}
    </div>
  );
}
