import { useEffect, useState } from 'react';

const codeScript = `# DataNex Research Solutions
# Python Web Scraping Pipeline
# Founded 2023 | 3+ Years Experience

import requests
from bs4 import BeautifulSoup
import pandas as pd
import mysql.connector

def scrape_data(url, pages=100):
    """Extract structured data at scale"""
    all_data = []
    
    for page in range(1, pages + 1):
        response = requests.get(
            f"{url}?page={page}",
            headers={"User-Agent": "DataNex/1.0"}
        )
        soup = BeautifulSoup(
            response.text, 'html.parser'
        )
        items = soup.find_all(
            'div', class_='listing'
        )
        for item in items:
            all_data.append({
                'title': item.find('h2').text,
                'price': item.find('.price').text,
                'url': item.find('a')['href'],
            })
    
    return pd.DataFrame(all_data)

# Run pipeline
df = scrape_data('https://target.com')
df.drop_duplicates(inplace=True)
df.to_csv('output.csv', index=False)

# ✓ Records: 50,000+ extracted
# ✓ Accuracy: 99.2% validated
# ✓ Delivery: On schedule`;

export default function TerminalWindow() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const lines = codeScript.split('\n');

  useEffect(() => {
    if (currentLine >= lines.length) {
      const resetTimer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          if (updated.length <= currentLine) {
            updated.push(line[currentChar]);
          } else {
            updated[currentLine] = line.slice(0, currentChar + 1);
          }
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, 18);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, lines]);

  const getLineColor = (line: string): string => {
    if (line.startsWith('#')) return '#4A6080';
    if (line.includes('def ') || line.includes('import ') || line.includes('from ') || line.includes('return ') || line.includes('for ') || line.includes('if ')) return '#C9A84C';
    if (line.includes('"""') || line.includes("'") || line.includes('"')) return '#E8C97A';
    if (line.includes('✓')) return '#2ECC71';
    return '#F0EDE8';
  };

  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
        </div>
        <span className="terminal-title">datanex_scraper.py</span>
        <span className="terminal-badge">Python 3.11</span>
      </div>
      <div className="terminal-body">
        {displayedLines.map((line, i) => (
          <div key={i} className="terminal-line" style={{ color: getLineColor(line) }}>
            <span className="terminal-line-num">{String(i + 1).padStart(2, ' ')}</span>
            <span className="terminal-line-content">{line}</span>
            {i === displayedLines.length - 1 && currentLine < lines.length && (
              <span className="terminal-cursor">█</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
