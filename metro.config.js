// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withMdx } = require("@bacons/mdx/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = withMdx(getDefaultConfig(__dirname));

module.exports = config;
