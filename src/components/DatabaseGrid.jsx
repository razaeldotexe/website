import Card from "./Card";
import songs from "../database/songs.json";
import artists from "../database/artists.json";
import books from "../database/books.json";
import games from "../database/games.json";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const DatabaseGrid = () => {
  const tabs = [
    { id: "songs", label: "Songs", data: songs },
    { id: "artists", label: "Artists", data: artists },
    { id: "books", label: "Books", data: books },
    { id: "games", label: "Games", data: games },
  ];

  return (
    <Tabs defaultValue="songs" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
          {tab.data.length > 0 ? (
            <div className="flex flex-col gap-4 mt-4">
              {tab.data.map((item) => (
                <Card
                  key={item.id}
                  title={item.title || item.name}
                  subtitle={
                    item.artist ||
                    item.author ||
                    item.platform ||
                    item.description
                  }
                  image={item.cover || item.thumbnail}
                  link={item.link}
                  type={tab.id}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center border border-dashed rounded-lg mt-4 text-muted-foreground">
              <h2 className="text-lg font-semibold text-foreground">
                No Items Found
              </h2>
              <p className="text-sm">This collection is currently empty.</p>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DatabaseGrid;
