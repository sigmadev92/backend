import mongoose from "mongoose";

const vocabSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
    pos: {
      type: String,
      enum: [
        "Noun",
        "Adjective",
        "Verb",
        "Adverb",
        "Preposition",
        "Interjection",
      ],
      required: true,
    },
    tone: [
      {
        type: String,
        enum: [
          "Positive",
          "Negative",
          "Informal",
          "Formal",
          "Derogatory",
          "Optimistic",
          "Pessimistic",
          "Sarcastic",
          "Neutral",
        ],
        required: true,
      },
    ],
    context: [
      {
        type: String,
        enum: [
          "Economics",
          "Corporate",
          "Governance",
          "Judicial",
          "Person",
          "Personality",
          "Situation",
          "2-Person",
          "Environmemt",
          "STEM",
          "Military",
          "Action",
          "Literature",
          "Abstract",
          "Places",
          "Things",
        ],
        required: true,
      },
    ],
    wordSrc: [
      {
        type: String,
        enum: ["Exam", "Magazine", "Internet"],
        default: "Internet",
      },
    ],
    wordSrcDescription: {
      type: String,
      required: true,
    },
    meaningSrc: [
      {
        type: String,
        enum: [
          "ChatGPT",
          "Claude",
          "Perplexity",
          "Gemini",
          "Google Search",
          "Merriam Webster",
          "Oxford",
          "Cambridge",
          "NY Times",
          "Times Of India",
          "Other",
        ],
        required: true,
      },
    ],
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    
  },
  {
    timestamps: true,
  },
);

const Vocab = mongoose.model("Vocab", vocabSchema);

export default Vocab;
