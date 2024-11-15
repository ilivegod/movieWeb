import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const params = useParams<{ movieId: string }>();
  return <div>moviedetail{params.movieId}</div>;
}
