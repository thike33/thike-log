import { createClient } from "microcms-js-sdk";

// APIが取得できない時にエラーを出す
if (!process.env.API_KEY) {
  throw new Error("microCMSのAPIキーが取得できませんでした。");
}
if (!process.env.SERVICE_DOMAIN) {
  throw new Error("microCMSのドメインが取得できませんでした。")
}

// 初期化
export const client = createClient({
  apiKey: process.env.API_KEY,
  serviceDomain: process.env.SERVICE_DOMAIN,
})

// 投稿一覧を取得 queriesで取得件数を変更
export const getPosts = async (queries) => {
  const data = await client.getList({
    customRequestInit: {
      next: {
        revalidate: 60,
      }
    },
    endpoint: "blog",
    queries,
  });
  return data.contents;
}

// カテゴリーのIDと一致した記事を取得
export const getPostsByCategoryId = async (categoryId) => {
  const data = await client.get({
    endpoint: 'blog',
    queries: { filters: `category[equals]${categoryId}` },
  });
  return data.contents;
}

// カテゴリー一覧を取得
export const getCategories = async () => {
  const categories = await client.get({
    endpoint: "categories",
  });
  return categories.contents;
}

// 投稿詳細を取得
export const getPostDetail = async (contentId) => {
  const dataDetail = await client.getListDetail({
    contentId,
    endpoint: "blog",
  });
  return dataDetail;
}