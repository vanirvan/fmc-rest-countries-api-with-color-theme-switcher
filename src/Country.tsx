import { useParams } from "react-router";

export default function Country() {
  const { country } = useParams<{ country: string }>();

  return <span>Country: {country}</span>;
}
