import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContent } from "@/components/content-provider";

const Dashboard = () => {
  const { posts } = useContent();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{posts.length}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
