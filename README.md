# prime-factorization

The simplest method of finding factors is so-called **direct search factorization** (a.k.a. trial division). In this method, all possible factors are systematically tested using trial division to see if they actually divide the given number. It is practical only for very small numbers.

The fastest-known fully proven deterministic algorithm is the **Pollard-Strassen method** (Pomerance 1982; Hardy et al. 1990).

## Algorithm

Following are the steps to find all prime factors.
1. While n is divisible by 2, print 2 and divide n by 2.
2. After step 1, n must be odd. Now start a loop from i = 3 to square root of n. While i divides n, print i and divide n by i, increment i by 2 and continue.
3. If n is a prime number and is greater than 2, then n will not become 1 by above two steps. So print n if it is greater than 2
