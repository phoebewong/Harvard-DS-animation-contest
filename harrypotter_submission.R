library(gapminder)
library(ggplot2)
library(gganimate)

# Submission file name should be "firstnamelastname_submission.R"
# Make sure you thoroughly comment your code 
# And give any attribution to code you have used from other people

theme_set(theme_bw())

# Adapted from https://github.com/thomasp85/gganimate

p <- ggplot(gapminder, aes(gdpPercap, lifeExp, size = pop, colour = country)) +
  geom_point(alpha = 0.7, show.legend = FALSE) +
  scale_colour_manual(values = country_colors) +
  scale_size(range = c(2, 12)) +
  scale_x_log10() +
  facet_wrap(~continent) +
  # Here comes the gganimate specific bits
  labs(title = 'Year: {frame_time}', x = 'GDP per capita', y = 'life expectancy') +
  transition_time(year) +
  ease_aes('linear')

p