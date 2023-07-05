export default function handler(_: any, res: any) {
  res.status(200).json(["en-US", "fr", "nl-NL"]);
}
