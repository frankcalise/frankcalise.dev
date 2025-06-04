import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

const posts = [{ slug: "my-first-post", title: "My First Post" }];

export default function BlogIndex() {
  return (
    <ThemedView style={{ padding: 20 }}>
      <ThemedText style={{ fontSize: 24, marginBottom: 20 }}>Blog</ThemedText>
      {posts.map(({ slug, title }) => (
        <Link key={slug} href={`/blog/${slug}`}>
          <ThemedText style={{ fontSize: 18, marginBottom: 10 }}>{title}</ThemedText>
        </Link>
      ))}
    </ThemedView>
  );
}
