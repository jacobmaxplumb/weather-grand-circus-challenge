export class WeatherResult {
  constructor(
    public name: string,
    public description: string,
    public icon: string,
    public feelsLike: string,
    public windsSpeed: number,
    public temp: string
  ) {}
}
