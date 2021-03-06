import React from 'react';
import imageResolver from '../utils/image-resolver.js';
import { getSlug, fillUrlData, getRelativeTime } from '../utils/calcs.js';

import {
  WOWPROGRESS_ICON,
  WOWPROGRESS_CHAR,
  WOWPROGRESS_GUILD,
  WARCRAFTLOGS_ICON,
  WARCRAFTLOGS_CHAR,
  WORLDOFWARCRAFT_ARMORY,
  WORLDOFWARCRAFT_GUILD,
} from '../constants/app.js';

import Icon from '../components/Icon.jsx';
import CharacterAppearance from '../components/CharacterAppearance.jsx';
import CharacterSpec from '../components/CharacterSpec.jsx';

const CharacterHeader = ({
  character,
  comparedTo,
  region,
  language,
  selectedTalents,
  comparedToTalents,
  shouldCompare,
  isDifferentSpec,
}) => (
  <div className="Character-header">
    {/* Character avatar */}
    <CharacterAppearance
      picture={character.thumbnail}
      faction={character.race.side}
    />

    {/* Character name */}
    <span className={`Character-name color--${character.class.slug}`}>{character.name}</span>

    {/* External links */}
    <div className="Character-links">
      <a
        className="Character-link"
        title="View on World of Warcraft armory"
        target="_blank"
        rel="noopener noreferrer"
        href={fillUrlData({
          url: WORLDOFWARCRAFT_ARMORY,
          region: region,
          language: language,
          realm: getSlug({name: character.realm, useSpaceDashes: true}),
          characterName: getSlug({name: character.name}),
        })
      }>
        <Icon className="Character-linkIcon" icon="wow" />
      </a>
      <a
        className="Character-link"
        title="View on WowProgress"
        target="_blank"
        rel="noopener noreferrer"
        href={fillUrlData({
          url: WOWPROGRESS_CHAR,
          region: region,
          realm: getSlug({name: character.realm, useDashes: true, useSpaceDashes: true}),
          characterName: character.name,
        })
      }>
        <img alt="Link to WoWProgress.com" className="Character-linkIcon" src={WOWPROGRESS_ICON} />
      </a>
      <a
        className="Character-link"
        title="View on Warcraft Logs"
        target="_blank"
        rel="noopener noreferrer"
        href={fillUrlData({
          url: WARCRAFTLOGS_CHAR,
          region: region,
          realm: getSlug({name: character.realm, useSpaceDashes: true}),
          characterName: character.name,
        })
      }>
        <img
          alt="Link to WarcraftLogs.com"
          className="Character-linkIcon"
          src={imageResolver('../images/logo-warcraftlogs.png')}
        />
      </a>
    </div>

    {/* Character class and spec */}
    <CharacterSpec
      className="Character-spec"
      level={character.level}
      characterClass={character.class}
      spec={selectedTalents && selectedTalents.spec}
      shouldCompare={shouldCompare}
      isDifferentSpec={isDifferentSpec}
    />

    {/* Guild info */}
    { character && character.guild &&
      <div className="Character-guild">
        Guild: <span className="Character-guildName">{ character.guild.name }</span>
        <div className="Character-links">
          <a
            className="Character-link"
            title="View World of Warcraft guild's page"
            target="_blank"
            rel="noopnenernoopener noreferrer"
            href={fillUrlData({
              url: WORLDOFWARCRAFT_GUILD,
              region: region,
              language: language,
              realm: getSlug({name: character.guild.realm, useSpaceDashes: true}),
              guild: getSlug({name: character.guild.name, useLowDashes: true}, true),
            })
          }>
            <Icon className="Character-linkIcon" icon="wow" />
          </a>
          <a
            className="Character-link"
            title="View WoWProgress guild's page"
            target="_blank"
            rel="noopnenernoopener noreferrer"
            href={fillUrlData({
              url: WOWPROGRESS_GUILD,
              region: region,
              realm: getSlug({name: character.guild.realm, useDashes: true, useSpaceDashes: true}),
              guild: getSlug({name: character.guild.name, usePluses: true}),
            })
          }>
            <img alt="Link to WoWProgress.com" className="Character-linkIcon" src={WOWPROGRESS_ICON} />
          </a>
        </div>
      </div>
    }

    {/* Last updated */}
    <p className="Character-lastUpdate">
      <span className="Character-lastUpdateLabel">Last update</span>
      {getRelativeTime(character.lastModified)}
    </p>
  </div>
);

export default CharacterHeader;
