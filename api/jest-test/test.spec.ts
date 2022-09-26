import { client } from "../support/http-client";
import { METHODS, Post } from "../support/types";



const POSTS_QUANTITY = 100;
const POST_ID = Math.floor(Math.random() * POSTS_QUANTITY) + 1;
const POST: Post = {
    title: "AQA",
    body: "Let's automate",
    userId: Math.floor(Math.random() * POSTS_QUANTITY) + 1
}


let response;

describe("Test HTTP methods", () => {

    describe(`${METHODS.GET} method`, () => {
        test("Should correctly get all posts", async () => {
            try {
                response = await client.request(METHODS.GET, { url: "/posts" });
            } catch (error: any) {
                throw new Error(error.message);
            }
            expect(response.status).toEqual(200);
            expect(response.data).toHaveLength(POSTS_QUANTITY);
        })

        test(`Should correctly get post with id ${POST_ID}`, async () => {
            try {
                response = await client.request(METHODS.GET, { url: `/posts/${POST_ID}` })
            } catch (error: any) {
                throw new Error(error.message);
            }
            expect(response.status).toEqual(200);
            expect(response.data.id).toEqual(POST_ID);
        })

        // test.only(`Should correctly get filtered result by userId`, async () => {
        //     const { userId } = POST;
        //     try {
        //         response = await client.request(METHODS.GET, { url: `/posts?userId=${userId}` })
        //     } catch (error: any) {
        //         throw new Error(error.message);
        //     }
        //     expect(response.status).toEqual(200);

        //     console.log(response.data);

        //     response.data.forEach((post: any) => {
        //         expect(post.userId).toEqual(userId);
        //     });
        // })

        test("Should correctly handle non-existing post", async () => {
            try {
                response = await client.request(METHODS.GET, { url: `posts/${POSTS_QUANTITY + 1}` });

            } catch (error: any) {
                expect(error.response.status).toEqual(404);
            }
        })
    })

    describe(`${METHODS.POST} method`, () => {
        test("Should correctly create a post", async () => {
            try {
                response = await client.request(METHODS.POST, { url: "/posts", body: POST, headers: { "Content-Type": "application/json" } });

            } catch (error: any) {
                throw new Error(error.message);
            }
            expect(response.status).toEqual(201);
            for (const key in POST) {
                expect(POST[key]).toEqual(response.data[key]);
            }
        })
    })

    describe(`${METHODS.PATCH} method`, () => {
        test(`Should correctly update post with id ${POST_ID} by method ${METHODS.PATCH}`, async () => {
            try {
                response = await client.request(METHODS.PATCH, { url: `/posts/${POST_ID}`, body: { title: "New title" }, headers: { "Content-Type": "application/json", } });
                console.log(response.data);
            } catch (error: any) {
                throw new Error(error.message);
            }
            expect(response.data.title).toEqual("New title");
            expect(response.status).toEqual(200);
        })
    })

    describe(`${METHODS.PUT} method`, () => {
        test(`Should correctly update post with id ${POST_ID} by method ${METHODS.PUT}`, async () => {
            try {
                response = await client.request(METHODS.PUT, { url: `/posts/${POST_ID}`, body: POST, headers: { "Content-Type": "application/json", } });
                console.log(response.data);
            } catch (error: any) {
                throw new Error(error.message);
            }
            for (const key in POST) {
                expect(response.status).toEqual(200);
                expect(POST[key]).toEqual(response.data[key]);
            }
        })

        test(`Should correctly handle non-existing post while updating by method ${METHODS.PUT}`, async () => {
            try {
                response = await client.request(METHODS.PUT, { url: `/posts/${POSTS_QUANTITY + 1}`, body: POST, headers: { "Content-Type": "application/json", } });
            } catch (error: any) {
                expect(error.response.status).toEqual(500);
            }
        })
    })

    describe(`${METHODS.DELETE} method`, () => {
        test(`Should correctly delete post with id ${POST_ID}`, async () => {
            try {
                response = await client.request(METHODS.DELETE, { url: `posts/${POST_ID}` })

            } catch (error: any) {
                throw new Error(error.message);
            }
            expect(response.status).toEqual(200);
            expect(response.data).toEqual({});
        })
    })
})