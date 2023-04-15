export const GENERATE_VIDEO_REQUEST = "GENERATE_VIDEO_REQUEST";
export const GENERATE_VIDEO_SUCCESS = "GENERATE_VIDEO_SUCCESS";
export const GENERATE_VIDEO_FAILURE = "GENERATE_VIDEO_FAILURE";

export const generateVideo = (apiKey, inputText, avatar, voice) => {
  return async (dispatch) => {
    dispatch({ type: GENERATE_VIDEO_REQUEST });

    try {
      const response1 = await fetch("https://api.d-id.com/talks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic bGF4bWlzaW5oYTEwN0BnbWFpbC5jb20:M9g1ScaMBgWbZTcumxJ6p",
        },
        body: JSON.stringify({
          script: {
            type: "text",
            input: inputText,
          },
          source_url:
            "https://create-images-results.d-id.com/DefaultPresenters/Noelle_f/image.jpeg",
        }),
      });

      let videoID = await response1.json();

      if (response1.ok) {
        const data = await getVideo(videoID);
        dispatch({ type: GENERATE_VIDEO_SUCCESS, payload: data ? data : {} });
      } else {
        throw new Error("Failed to generate video");
      }
    } catch (error) {
      dispatch({ type: GENERATE_VIDEO_FAILURE, payload: error.message });
    }
  };
};

async function getVideo(videoParams) {
  const video = await fetch(`https://api.d-id.com/talks/${videoParams.id}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic bGF4bWlzaW5oYTEwN0BnbWFpbC5jb20:M9g1ScaMBgWbZTcumxJ6p",
    },
  });
  let data = await video.json();
  console.log({ data });
  return data;
}
