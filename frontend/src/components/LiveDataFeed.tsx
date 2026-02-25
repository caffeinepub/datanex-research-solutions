import { useEffect, useRef, useState } from 'react';

interface FeedRow {
  source: string;
  records: string;
  status: 'ACTIVE' | 'COMPLETE' | 'QUEUED';
  accuracy: string;
}

const feedData: FeedRow[] = [
  { source: 'amazon.com/products', records: '12,450', status: 'ACTIVE', accuracy: '99.4%' },
  { source: 'linkedin.com/companies', records: '8,200', status: 'COMPLETE', accuracy: '98.9%' },
  { source: 'crunchbase.com/orgs', records: '5,670', status: 'ACTIVE', accuracy: '99.1%' },
  { source: 'yellowpages.com/biz', records: '23,100', status: 'COMPLETE', accuracy: '99.7%' },
  { source: 'glassdoor.com/jobs', records: '4,890', status: 'QUEUED', accuracy: '—' },
  { source: 'zillow.com/listings', records: '9,340', status: 'ACTIVE', accuracy: '99.2%' },
  { source: 'yelp.com/restaurants', records: '15,600', status: 'COMPLETE', accuracy: '98.8%' },
  { source: 'indeed.com/jobs', records: '31,200', status: 'ACTIVE', accuracy: '99.5%' },
  { source: 'shopify.com/stores', records: '7,800', status: 'COMPLETE', accuracy: '99.3%' },
  { source: 'g2.com/reviews', records: '3,450', status: 'QUEUED', accuracy: '—' },
];

const statusColor: Record<FeedRow['status'], string> = {
  ACTIVE: '#2ECC71',
  COMPLETE: '#C9A84C',
  QUEUED: '#7A8FA8',
};

export default function LiveDataFeed() {
  const [rows, setRows] = useState<FeedRow[]>(feedData);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRows((prev) => {
        const updated = [...prev];
        const activeIdx = updated.findIndex((r) => r.status === 'ACTIVE');
        if (activeIdx !== -1) {
          const newRecords = parseInt(updated[activeIdx].records.replace(/,/g, '')) + Math.floor(Math.random() * 50 + 10);
          updated[activeIdx] = {
            ...updated[activeIdx],
            records: newRecords.toLocaleString(),
          };
        }
        return updated;
      });
    }, 1500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="live-feed-section">
      <div className="live-feed-header">
        <div className="live-feed-title">
          <span className="live-dot" />
          <span className="live-feed-label">LIVE DATA COLLECTION FEED</span>
        </div>
        <span className="live-feed-meta">Real-time pipeline status · Updated every 1.5s</span>
      </div>

      <div className="live-feed-table-wrap">
        <div className="live-feed-table-header">
          <span>SOURCE</span>
          <span>RECORDS</span>
          <span>STATUS</span>
          <span>ACCURACY</span>
        </div>
        <div className="live-feed-rows">
          {rows.map((row, i) => (
            <div key={i} className="live-feed-row">
              <span className="feed-source">{row.source}</span>
              <span className="feed-records">{row.records}</span>
              <span className="feed-status" style={{ color: statusColor[row.status] }}>
                {row.status === 'ACTIVE' && <span className="feed-active-dot" />}
                {row.status}
              </span>
              <span className="feed-accuracy" style={{ color: row.accuracy === '—' ? '#4A6080' : '#C9A84C' }}>
                {row.accuracy}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
