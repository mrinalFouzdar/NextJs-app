import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1> Student List</h1>
      <ul>
        <li>
          <Link href="/studentlist/mrinal">Mrinal</Link>
        </li>
        <li>
          <Link href="/studentlist/ram">Ram</Link>
        </li>
        <li>
          <Link href="/studentlist/joy">Joy</Link>
        </li>
        <li>
          <Link href="/studentlist/harry">Harry</Link>
        </li>
      </ul>
    </div>
  );
}
