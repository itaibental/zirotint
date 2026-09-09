// Aggregates every concept module into a single learningModules array.
// To add a new concept: create js/data/concepts/<id>.js (see any file for the shape)
// and add one import + array entry below (order here only affects this file's readability -
// the home page groups and orders concepts by their `arena` field automatically).

import cancel_culture from './concepts/cancel_culture.js';
import cross_ownership from './concepts/cross_ownership.js';
import democracy from './concepts/democracy.js';
import fake_news from './concepts/fake_news.js';
import fourth_estate from './concepts/fourth_estate.js';
import freedom_of_expression from './concepts/freedom_of_expression.js';
import freedom_of_press from './concepts/freedom_of_press.js';
import hegemony from './concepts/hegemony.js';
import identity_politics from './concepts/identity_politics.js';
import investigative_journalism_top from './concepts/investigative_journalism_top.js';
import media_bias from './concepts/media_bias.js';
import media_ethics from './concepts/media_ethics.js';
import mobilized_media from './concepts/mobilized_media.js';
import political_correctness from './concepts/political_correctness.js';
import post_truth from './concepts/post_truth.js';
import public_sphere from './concepts/public_sphere.js';
import public_trust_media from './concepts/public_trust_media.js';
import public_vs_commercial from './concepts/public_vs_commercial.js';
import communication_models from './concepts/communication_models.js';
import communication_process_components from './concepts/communication_process_components.js';
import digital_boundary_blurring from './concepts/digital_boundary_blurring.js';
import fiske from './concepts/fiske.js';
import interpersonal_vs_mass_communication from './concepts/interpersonal_vs_mass_communication.js';
import lasswell_model from './concepts/lasswell_model.js';
import americanization from './concepts/americanization.js';
import cultural_imperialism from './concepts/cultural_imperialism.js';
import global_village from './concepts/global_village.js';
import globalization from './concepts/globalization.js';
import glocalization from './concepts/glocalization.js';
import hybrid_identity from './concepts/hybrid_identity.js';
import localization from './concepts/localization.js';
import technological_determinism from './concepts/technological_determinism.js';
import agenda_setting from './concepts/agenda_setting.js';
import fact_vs_opinion_zira3 from './concepts/fact_vs_opinion_zira3.js';
import five_ws from './concepts/five_ws.js';
import framing from './concepts/framing.js';
import gatekeeper_vs_advocate_journalist from './concepts/gatekeeper_vs_advocate_journalist.js';
import journalistic_professional_values from './concepts/journalistic_professional_values.js';
import news_value from './concepts/news_value.js';
import social_construction_of_reality from './concepts/social_construction_of_reality.js';
import spiral_of_silence from './concepts/spiral_of_silence.js';
import memes from './concepts/memes.js';
import polysemy from './concepts/polysemy.js';
import satire from './concepts/satire.js';

export const learningModules = [
  cancel_culture,
  cross_ownership,
  democracy,
  fake_news,
  fourth_estate,
  freedom_of_expression,
  freedom_of_press,
  hegemony,
  identity_politics,
  investigative_journalism_top,
  media_bias,
  media_ethics,
  mobilized_media,
  political_correctness,
  post_truth,
  public_sphere,
  public_trust_media,
  public_vs_commercial,
  communication_models,
  communication_process_components,
  digital_boundary_blurring,
  fiske,
  interpersonal_vs_mass_communication,
  lasswell_model,
  americanization,
  cultural_imperialism,
  global_village,
  globalization,
  glocalization,
  hybrid_identity,
  localization,
  technological_determinism,
  agenda_setting,
  fact_vs_opinion_zira3,
  five_ws,
  framing,
  gatekeeper_vs_advocate_journalist,
  journalistic_professional_values,
  news_value,
  social_construction_of_reality,
  spiral_of_silence,
  memes,
  polysemy,
  satire,
];
