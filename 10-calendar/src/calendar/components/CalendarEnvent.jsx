
export const CalendarEnvent = ({ event }) => {
    // console.log(props);
    const { title, user } = event;
  return (
    <>
      <strong>{title}</strong>
      <strong> - {user.name}</strong>
    </>
  )
}
